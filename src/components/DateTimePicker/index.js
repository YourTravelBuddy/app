import React, { useCallback } from "react";
import { View } from "react-native";
import { Text, TextInput, TouchableRipple, useTheme } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

import useToggle from "../../hooks/useToggle";

const DateTimePicker = ({
  value,
  onChange,
  mode = "date",
  label = "",
  disabled = false,
  style,
  ...props
}) => {
  const pickerVisible = useToggle();
  const theme = useTheme();

  const handleConfirm = useCallback(
    (date) => {
      pickerVisible.hide();
      onChange(date);
    },
    [pickerVisible, onChange]
  );

  const renderInputText = useCallback(
    () => (
      <TouchableRipple
        disabled={disabled}
        style={{
          flexGrow: 1,
          justifyContent: "center",
          paddingHorizontal: 12,
        }}
        onPress={pickerVisible.show}
      >
        <View>
          <Text
            style={[
              theme.fonts.regular,
              { color: theme.colors.text },
              {
                fontSize: 12,
                paddingTop: 10,
                opacity: 0.5,
              },
            ]}
          >
            {label}
          </Text>
          <View style={{ height: 32, paddingVertical: 4 }}>
            <Text style={{ fontSize: 16 }}>
              {mode === "date"
                ? moment(value).format("DD/MM/YYYY")
                : moment(value).format("hh:mm A")}
            </Text>
          </View>
        </View>
      </TouchableRipple>
    ),
    [pickerVisible, value, disabled, mode, label, theme]
  );

  return (
    <>
      <View style={style}>
        <TextInput
          mode="flat"
          dense={true}
          style={{
            height: 64,
          }}
          render={renderInputText}
        />
      </View>
      <DateTimePickerModal
        isVisible={pickerVisible.value}
        date={value}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={pickerVisible.hide}
        {...props}
      />
    </>
  );
};

export default DateTimePicker;
