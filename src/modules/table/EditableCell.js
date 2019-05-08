import React, { useState, useRef } from 'react';
import { Form, Input, Checkbox, InputNumber, DatePicker } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

export const EditableFormRow = Form.create()(EditableRow);

const getInputComponentByDataIndex = (dataIndex, save, inputRef) => {
  return {
    amount: (
      <InputNumber
        ref={inputRef}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onPressEnter={save}
        onBlur={save}
      />
    ),
    description: <Input ref={inputRef} onPressEnter={save} onBlur={save} />,
  }[dataIndex];
};

const EditableCell = ({ dataIndex, title, record, handleSave, isCheckbox, ...restProps }) => {
  const [editing, setEditing] = useState(record && record.isEditing);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const toggleEdit = () => {
    setEditing(!editing);
    if (!editing) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  };

  const saveInput = e => {
    formRef.current.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  const onChangedCheckbox = e => handleSave({ ...record, [dataIndex]: e.target.checked });

  const saveDatePicker = (date, dateString) => {
    if (dateString) {
      toggleEdit();
      handleSave({ ...record, date: dateString });
    }
  };

  if (dataIndex) {
    if (isCheckbox) {
      return (
        <td {...restProps}>
          <Checkbox onChange={onChangedCheckbox} checked={!!record[dataIndex]} />{' '}
        </td>
      );
    }

    if (dataIndex === 'date') {
      return (
        <td {...restProps}>
          {editing ? (
            <DatePicker
              autoFocus
              style={{ width: 120 }}
              defaultValue={moment(record[dataIndex], 'DD/MM/YYYY')}
              ref={inputRef}
              format="DD/MM/YYYY"
              onChange={saveDatePicker}
              onOpenChange={open => !open && toggleEdit()}
            />
          ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 10 }} onClick={toggleEdit}>
              {restProps.children}
            </div>
          )}
        </td>
      );
    }

    return (
      <td {...restProps}>
        {
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
                  })(getInputComponentByDataIndex(dataIndex, saveInput, inputRef))}
                </FormItem>
              ) : (
                <div className="editable-cell-value-wrap" style={{ paddingRight: 10 }} onClick={toggleEdit}>
                  {restProps.children}
                </div>
              );
            }}
          </EditableContext.Consumer>
        }
      </td>
    );
  }

  return <td {...restProps}>{restProps.children}</td>;
};

export { EditableCell };
