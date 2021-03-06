/**
 * cn - 确认框
 *    -- 调用 confirm 函数显示确认框。
 * en - Confirm
 *    -- The confirmation modal dialog.
 */
import React, { Component } from 'react'
import { Modal, Button } from 'shineout'

export default class extends Component {
  confirm = () => {
    Modal.confirm({
      title: 'This is a confirm message',
      content: 'this is some information that user confirm',
      onOk: () => console.log('yes i know'),
      text: { ok: 'Yes', cancel: 'No' },
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.confirm}>confirm</Button>
      </div>
    )
  }
}
