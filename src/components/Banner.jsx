import React from "react";
import { Carousel, Tabs } from "antd";
import { BiTransfer } from "react-icons/bi";
import { Checkbox } from "antd";
import { Select } from "antd";

const { TabPane } = Tabs;

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

const Banner = () => (
  <div className="relative">
    {/* Carousel */}
    <Carousel autoplay>
      <div>
        <img
          className="w-full h-[630px] object-cover"
          src="https://www.vietnamairlines.com/~/media/79386C81E05A493684891B3A86BBD547.ashx"
          alt="Banner 1"
        />
      </div>
      <div>
        <img
          className="w-full h-[630px] object-cover"
          src="https://www.vietnamairlines.com/vn/vi/~/media/5BC370B28D6C475EAD2551167D09DB73.ashx"
          alt="Banner 2"
        />
      </div>
      <div>
        <img
          className="w-full h-[630px] object-cover"
          src="https://www.vietnamairlines.com/vn/vi/~/media/06D7316C14B949799B5054B1128D6EA8.ashx"
          alt="Banner 3"
        />
      </div>
    </Carousel>

    {/* Search Form */}
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full">
      <Tabs defaultActiveKey="1">
        <TabPane tab="One-Way" key="1">
          {/* Form for One-Way */}
          <div className="grid grid-cols-3 gap-4 items-center">
            {/* From */}
            <div className="relative">
              <p className="absolute top-2 left-4 text-gray-500 text-sm font-semibold">
                From
              </p>
              <input
                type="text"
                placeholder="Enter departure city"
                className="w-full border border-gray-300 text-base rounded-lg px-4 pt-8 pb-4 outline-none"
              />
            </div>

            {/* To */}
            <div className="relative">
              <p className="absolute top-2 left-4 text-gray-500 text-sm font-semibold">
                To
              </p>
              <input
                type="text"
                placeholder="Enter destination city"
                className="w-full border border-gray-300 text-base rounded-lg px-4 pt-8 pb-4 outline-none"
              />
            </div>

            {/* Depart */}
            <div className="relative">
              <p className="absolute top-2 left-4 text-gray-500 text-sm font-semibold">
                Depart
              </p>
              <input
                type="date"
                className="w-full border border-gray-300 text-base rounded-lg px-4 pt-8 pb-4 outline-none"
              />
            </div>
          </div>
          <div className="flex py-3  justify-between items-center">
            <Checkbox className="text-base">Direct flight only</Checkbox>
            <div className="flex gap-3 items-center">
              <Select
                showSearch
                placeholder="1 Adult"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: "1 Adult",
                    label: "1 Adult",
                  },
                  {
                    value: "2 Adult",
                    label: "2 Adult",
                  },
                ]}
              />

              <Select
                showSearch
                placeholder="Premium Economy"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: "Economy",
                    label: "Economy",
                  },
                  {
                    value: "Premium Economy",
                    label: "Premium Economy",
                  },
                  {
                    value: "Frist Class",
                    label: "Frist Class",
                  },
                  {
                    value: "Business Class",
                    label: "Business Class",
                  },
                ]}
              />
              <button className="bg-green-500 px-4 py-2 rounded-3xl text-white outline-none">
                Tìm kiếm
              </button>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Round-Trip" key="2">
          {/* Form for Round-Trip */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">From</label>
            <input
              type="text"
              placeholder="Enter departure city"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <label className="block text-gray-700 font-medium mb-1">To</label>
            <input
              type="text"
              placeholder="Enter destination city"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <label className="block text-gray-700 font-medium mb-1">
              Departure Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <label className="block text-gray-700 font-medium mb-1">
              Return Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
);

export default Banner;
