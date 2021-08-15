import {Form} from "antd";

import { Label } from "uiKit/Label";
import { CustomButton } from "uiKit/CustomButton/CustomButton";
import s from "./FormConstructor.module.scss";

const FormItem = Form.Item;

const initialValues = {
  firstName: "John",
  lastName: "Brown",
  sex: "male",
  address: "New York No. 1 Lake Park",
  age: 32
}

export const FormConstructor = ({onCancel}) => {
  return (
    <div className={s.formContainer}>
      <Form initialValues={initialValues} className={s.form} labelAlign="left" colon={false}>
        <div>
          <FormItem label="First Name" name="firstName" className={s.formItem}>
            <Label className={s.formValue} />
          </FormItem>
          <FormItem label="Sex" name="sex" className={s.formItem}>
            <Label className={s.formValue} />
          </FormItem>
          <FormItem label="Address" name="address" className={s.formItem}>
            <Label className={s.formValue} />
          </FormItem>
        </div>
        <div>
          <FormItem label="Last Name" name="lastName" className={s.formItem}>
            <Label className={s.formValue} />
          </FormItem>
          <FormItem label="Age" name="age" className={s.formItem}>
            <Label className={s.formValue} />
          </FormItem>
        </div>
      </Form>
      <div className={s.formFooter}>
        <CustomButton onClick={onCancel}>Ок</CustomButton>
        <CustomButton type="primary" onClick={onCancel}>Закрыть</CustomButton>
      </div>
    </div>
  );
};
