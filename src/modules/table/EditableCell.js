import React, { useState, useRef } from 'react';
import { Form, Input, Checkbox, InputNumber } from 'antd';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

export const EditableFormRow = Form.create()(EditableRow);

const EditableCell = ({ dataIndex, title, record, handleSave, isCheckbox, ...restProps }) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const toggleEdit = () => {
    setEditing(!editing);
    if (!editing) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  };

  const save = e => {
    formRef.current.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  const onChangedCheckbox = e => {
    handleSave({ ...record, [dataIndex]: e.target.checked });
  };

  if (dataIndex) {
    return (
      <td {...restProps}>
        {isCheckbox ? (
          <Checkbox onChange={onChangedCheckbox} checked={!!record[dataIndex]} />
        ) : (
          <EditableContext.Consumer>
            {form => {
              formRef.current = form;
              return editing ? (
                <FormItem style={{ margin: 0 }}>
                  {form.getFieldDecorator(dataIndex, {
                    rules: [
                      {
                        required: true,
                        message: `${title} is required.`,
                      },
                    ],
                    initialValue: record[dataIndex],
                  })(
                    dataIndex === 'amount' ? (
                      <InputNumber
                        ref={inputRef}
                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        // onChange={onChange}
                        onPressEnter={save}
                        onBlur={save}
                      />
                    ) : (
                      <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                    ),
                  )}
                </FormItem>
              ) : (
                <div className="editable-cell-value-wrap" style={{ paddingRight: 10 }} onClick={toggleEdit}>
                  {restProps.children}
                </div>
              );
            }}
          </EditableContext.Consumer>
        )}
      </td>
    );
  }

  return <td {...restProps}>{restProps.children}</td>;
};

export { EditableCell };
