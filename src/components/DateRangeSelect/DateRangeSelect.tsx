import DateTimeValue from '../../views/DateTimeValue'
import { formatDateTime } from '../FilterView/FilterView.utils'
import React from 'react'
import { DateType } from '../../types/common'
import DateTimePicker from "react-native-modal-datetime-picker";

type Props = {
  onDatePicked: (type: DateType, date: Date) => void
  startDate?: Date | null
  endDate?: Date | null
}

type State = {
  isSelectingDateFor: DateType | null
}

class DateRangeSelect extends React.Component<Props, State> {
  state: State = {
    isSelectingDateFor: null,
  }

  handleDatePickerPress = (type: DateType) => () => {
    this.setState({ isSelectingDateFor: type })
  }

  handleDateTimePicked = (date: Date) => {
    const { isSelectingDateFor } = this.state
    if (isSelectingDateFor) {
      this.props.onDatePicked(isSelectingDateFor, date)
      this.setState({ isSelectingDateFor: null })
    }
  }

  handleDateTimeCanceled = () => {
    this.setState({ isSelectingDateFor: null })
  }

  render() {
    const { startDate, endDate } = this.props
    const { isSelectingDateFor } = this.state

    let preselectedDate = undefined
    if (isSelectingDateFor === 'start' && startDate != null) {
      preselectedDate = startDate
    }
    if (isSelectingDateFor === 'end') {
      if (endDate) {
        preselectedDate = endDate
      } else if (startDate) {
        preselectedDate = new Date(startDate.getTime())
        preselectedDate.setHours(startDate.getHours() + 1)
      }
    }

    return (
      <>
        <DateTimeValue
          active={!!startDate}
          onPress={this.handleDatePickerPress('start')}
          text={startDate ? formatDateTime(startDate) : 'Select start date and time'}
        />
        <DateTimeValue
          active={!!endDate}
          onPress={this.handleDatePickerPress('end')}
          text={endDate ? formatDateTime(endDate) : 'Select end date and time'}
          style={{ marginTop: 15 }}
        />
        <DateTimePicker
          date={preselectedDate}
          mode={'datetime'}
          isVisible={isSelectingDateFor != null}
          onConfirm={this.handleDateTimePicked}
          onCancel={this.handleDateTimeCanceled}
        />
      </>
    )
  }
}

export default DateRangeSelect
