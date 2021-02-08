import {Button, Col, Row} from "ant-design-vue";
import FormCreate from "@xl-form-create/core";
import Vue from "vue";

export default formCreate;

declare class formCreate {
    static create: create;
    static maker: FormCreate.Maker<Creator, Rule>;
    static install: (vue: typeof Vue) => void;
    static init: init;
    static component: FormCreate.Component;
    static $form: FormCreate.$form;
    static parseJson: FormCreate.parseJson<Rule>;
    static copyRule: FormCreate.CopyRule<FormRule>;
    static copyRules: FormCreate.CopyRules<FormRule>;
}


interface AntdFormConfig {
    hideRequiredMark: boolean;
    labelCol: Col;
    layout: 'horizontal' | 'inline' | 'vertical';
    wrapperCol: Col;
    colon: boolean;
    labelAlign: 'left' | 'right';
    validateOnRuleChange: boolean;
}

export declare interface FormCol extends Col {
}

export declare interface FormOption extends FormCreate.BaseOption<Rule> {
    label: string;
    value: string;
    disabled?: boolean;

    [key: string]: any
}

export declare interface Rule extends FormCreate.Rule<$FApi, FormCol, FormOption> {
    labelCol?: Col,
    wrapperCol?: Col
}

export declare interface Creator extends FormCreate.Creator<Rule, FormCol, FormOption, $FApi> {

}

export declare interface Control extends FormCreate.Control<FormRule, $FApi> {

}

export declare type FormRule = Creator | Rule;

export declare interface DefaultSlot extends FormCreate.DefaultSlot<Rule> {

}

export declare interface FormConfig extends FormCreate.BaseConfig<AntdFormConfig, Row, Button, FormRule, FormButton> {
}

export declare interface FormButton extends FormCreate.BaseButton<FormCol>, Button {

}

export declare interface $FApi extends FormCreate.$FApi<FormRule, FormConfig, FormButton> {

}

export declare interface FormData extends FormCreate.FormData {
}

export declare interface BindFormData extends FormCreate.BindFormData {
}

export declare interface ParseRuleList extends FormCreate.ParseRuleList<FormRule> {
}

export declare const maker: FormCreate.Maker<Creator, Rule>;

export declare interface create extends FormCreate.Create<FormRule, FormConfig, FormButton> {
}

export declare interface install extends FormCreate.Install {
}

export declare interface init extends FormCreate.Init<FormRule, FormConfig, FormButton> {
}

export declare const MountApi: FormCreate.MountApi<FormRule, FormConfig, FormButton>;


export declare class VData extends FormCreate.VData {

}
