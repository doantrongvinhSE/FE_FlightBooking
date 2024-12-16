import React, { useState } from "react";
import { Button, Select, DatePicker, Input, Radio } from "antd";
import { SearchOutlined } from "@ant-design/icons";


function SearchBanner() {
  const [tripType, setTripType] = useState("round-trip");
  const [passengers, setPassengers] = useState("1");
  const [cabinClass, setCabinClass] = useState("economy");

  return (
    <div className="bg-gray w-full py-8  shadow-sm">
      <h1 className="text-2xl font-bold mb-6">Find your flight</h1>

      <div className="flex items-center space-x-4 mb-6">
        <Radio.Group
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
        >
          <Radio.Button value="round-trip">Round trip</Radio.Button>
          <Radio.Button value="one-way">One way</Radio.Button>
        </Radio.Group>

        <Select value={passengers} onChange={setPassengers} className="w-32">
          <Select.Option value="1">1 Passenger</Select.Option>
          <Select.Option value="2">2 Passengers</Select.Option>
          <Select.Option value="3">3 Passengers</Select.Option>
        </Select>

        <Select value={cabinClass} onChange={setCabinClass} className="w-32">
          <Select.Option value="economy">Economy</Select.Option>
          <Select.Option value="business">Business</Select.Option>
          <Select.Option value="first">First Class</Select.Option>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Input
          placeholder="From (City or Airport)"
          size="large"
          prefix={<div className="w-2 h-2 rounded-full bg-purple-500 mr-2" />}
        />
        <Input
          placeholder="To (City or Airport)"
          size="large"
          prefix={<div className="w-2 h-2 rounded-full bg-green-500 mr-2" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <DatePicker.RangePicker
          size="large"
          className="w-full"
          disabled={tripType === "one-way" ? [false, true] : [false, false]}
        />
      </div>

      <Button
        type="primary"
        icon={<SearchOutlined />}
        size="large"
        className="bg-green-500"
      >
        Search Flights
      </Button>
    </div>
  );
}

export default SearchBanner;
