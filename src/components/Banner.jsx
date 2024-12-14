import React from "react";
import { Carousel, Tabs } from "antd";
import { BiTransfer } from "react-icons/bi";
import { Checkbox } from "antd";
import { Select } from "antd";
import { DatePicker } from "antd";


const onChange1 = (date, dateString) => {
  console.log(date, dateString);
};

const { RangePicker } = DatePicker;


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
          className="w-full h-[730px] object-cover"
          src="https://www.bambooairways.com/documents/20122/1942796/1920x770+vi+nha+trang.jpg/be504d1b-fc0b-d1c3-023f-1cc9042ec240?t=1733302798059"
          alt="Banner 1"
        />
      </div>
      <div>
        <img
          className="w-full h-[730px] object-cover"
          src="https://www.vietnamairlines.com/vn/vi/~/media/5BC370B28D6C475EAD2551167D09DB73.ashx"
          alt="Banner 2"
        />
      </div>
      <div>
        <img
          className="w-full h-[730px] object-cover"
          src="https://www.vietnamairlines.com/vn/vi/~/media/06D7316C14B949799B5054B1128D6EA8.ashx"
          alt="Banner 3"
        />
      </div>
    </Carousel>

    {/* Search Form */}
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-lg max-w-5xl w-full">
      <Tabs
        defaultActiveKey="1"
        className="custom-tabs"
      >
        <TabPane tab={<span className="One-Way">One-Way</span>} key="1">
          {/* Form for One-Way */}
          <div className="flex justify-between gap-3 items-center">
            {/* From */}
            <div className="relative w-1/3">
              <p className="absolute top-2 left-4 text-gray-500 text-sm font-semibold">
                From
              </p>
              <input
                type="text"
                placeholder="Enter departure city"
                className="w-full border border-gray-300 text-base rounded-lg px-4 pt-8 pb-4 outline-none"
              />
            </div>

            <div className="w-8">
              <BiTransfer className="text-3xl text-green-600" />
            </div>

            {/* To */}
            <div className="relative w-1/3">
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
            <div className="relative w-1/3">
              <p className="absolute top-2 left-4 text-gray-500 text-sm font-semibold z-10">
                Depart
              </p>
              <DatePicker
                className="w-full  text-xl px-4 pt-8 pb-4 z-0"
                onChange={onChange1}
              />
            </div>
          </div>
          <div className="flex py-4 justify-between items-center">
            <Checkbox className="text-lg">Direct flight only</Checkbox>
            <div className="flex gap-3 items-center">
              <Select
                showSearch
                size="large"
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
                size="large"
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
        <TabPane tab={<span className="Round-Trip">Round-Trip</span>} key="2">
          {/* Form for One-Way */}
          <div className="flex justify-between gap-4 items-center">
            {/* From */}
            <div className="relative w-1/3">
              <p className="absolute top-2 left-4 text-gray-500 text-sm font-semibold">
                From
              </p>
              <input
                type="text"
                placeholder="Enter departure city"
                className="w-full border border-gray-300 text-base rounded-lg px-4 pt-8 pb-4 outline-none"
              />
            </div>

            <div className="w-8">
              <BiTransfer className="text-3xl text-green-600" />
            </div>

            {/* To */}
            <div className="relative w-1/3">
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
            <div className="relative w-1/3">
              <p className="absolute top-2 left-4 text-gray-500 text-sm font-semibold z-10">
                Depart
              </p>
              <RangePicker className="w-full  text-xl px-4 pt-8 pb-4 z-0" />
            </div>
          </div>
          <div className="flex py-4 justify-between items-center">
            <Checkbox className="text-lg">Direct flight only</Checkbox>
            <div className="flex gap-3 items-center">
              <Select
                showSearch
                size="large"
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
                size="large"
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
      </Tabs>
    </div>
  </div>
);

export default Banner;
