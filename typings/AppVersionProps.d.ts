/**
 * This file was generated from AppVersion.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ActionValue, EditableValue } from "mendix";

export interface AppVersionProps<Style> {
    name: string;
    style: Style[];
    appVersion: string;
    backendVersion?: EditableValue<string>;
    updateFlow?: ActionValue;
    noUpdateFlow?: ActionValue;
}

export interface AppVersionPreviewProps {
    class: string;
    style: string;
    appVersion: string;
    backendVersion: string;
    updateFlow: {} | null;
    noUpdateFlow: {} | null;
}
