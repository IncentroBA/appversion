import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle, View, Text } from "react-native";

import { Style, mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { AppVersionProps } from "../typings/AppVersionProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

const defaultStyle: CustomStyle = {
    container: {},
    label: {
        color: "#F6BB42"
    }
};

interface State {
    executeOnce?: boolean;
}

export class AppVersion extends Component<AppVersionProps<CustomStyle>, State> {
    constructor(props: AppVersionProps<CustomStyle>) {
        super(props)
        this.state = {
            executeOnce: false,
        }
    }
    private readonly styles = mergeNativeStyles(defaultStyle, this.props.style);

    appVersion() {
        var backendAppVersionString = this.props.backendVersion?.value?.toString();
        var appVersion = Number(this.props.appVersion.split('.').join(""));
        var backendAppVersion = Number(backendAppVersionString?.split('.').join(""));

        if (this.state.executeOnce === false) {
            if (backendAppVersion > appVersion) {
                this.props.updateFlow?.execute();
                this.setState({ executeOnce: true })
            }
            if (backendAppVersion <= appVersion) {
                this.props.noUpdateFlow?.execute();
                this.setState({ executeOnce: true })
            }
        }
    }

    render(): ReactNode {
        this.appVersion();
        return (
            <View style={this.styles.container}>
                <Text style={this.styles.label}>App Versie: {this.props.appVersion} / Backend Versie: {this.props.backendVersion?.value?.toString()}</Text>
            </View>
        );
    }
}
