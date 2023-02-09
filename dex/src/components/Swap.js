import React, {useState, useEffect} from "react";
import { Input, Popover, Radio, Modal, message } from "antd";
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function Swap() {
  const [slippage, setSlippage] = useState(2.5);

  function handleSlippageChange(e){
    setSlippage(e.target.value);
  }

  const settings = (
    <>
      <div>Slippage Tolerance</div>
      <div>
        <Radio.Group value={slippage} onChange={handleSlippageChange}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5.0%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  )
  return (
    <div className="tradeBox">
      <div className="tradeBoxHeader">
        <h4>Swap</h4>
        <Popover
        content={settings}
        title="Settings"
        trigger="click"
        placement="bottomRight"
        >
          <SettingOutlined className="cog" />
        </Popover>
      </div>
    </div>
  );
}

export default Swap;
