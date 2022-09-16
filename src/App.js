import { Button, Input, Select } from "antd";
import { useState } from "react";

function App() {
  const [showTextArea, setShowTextArea] = useState(false);

  return (
    <>
      <Button
        onClick={() =>
          setShowTextArea((currentShowTextArea) => !currentShowTextArea)
        }
      >
        Toggle
      </Button>
      {showTextArea && <Input.TextArea rows={4} />}
      <Select placeholder="Enter the dragon" style={{ width: 120 }}>
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
        <Select.Option value="disabled" disabled>
          Disabled
        </Select.Option>
        <Select.Option value="Yiminghe">yiminghe</Select.Option>
      </Select>
    </>
  );
}

export default App;
