import React from "react";
import { Button } from "antd";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { FaArrowRight } from "react-icons/fa6";

import { MdTipsAndUpdates } from "react-icons/md";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="">
        {/* Banner */}
        <Banner />

        {/* Check thong tin chuyen bay cua ban */}
        <div className="max-w-7xl mx-auto mt-[200px]">
          <div className="bg-[url('https://media.cnn.com/api/v1/images/stellar/prod/230615102420-06-qantas-project-sunrise-economy-seats.jpg?c=16x9')] bg-center bg-cover h-36 rounded-xl flex items-center justify-between px-10">
            <div className="flex-col space-y-1 text-white">
              <p className="text-3xl">
                Thông tin hữu ích cho chuyến bay của bạn
              </p>
              <p className="text-base">
                Tiêu chuẩn hành lý, điều kiện vé bay,... đều có ở đây!
              </p>
            </div>
            <div>
              <Button className="bg-blue-950 text-white text-base font-medium rounded-xl py-5 px-5 outline-none border-none">
                Tra cứu  <FaArrowRight />

              </Button>
            </div>
          </div>
        </div>

        {/* Ưu đãi */}
        <div className="max-w-7xl mx-auto mt-[50px]">
          <div className="flex justify-between mb-4 items-center ">
            <h2 className="text-2xl font-semibold">ƯU ĐÃI</h2>
            <div className="py-2 px-4 rounded-2xl flex space-x-2 items-center">
              <MdTipsAndUpdates className="text-blue-400 text-xl" />
              <span className="font-bold text-xl  text-gray-600">Tips:</span>
              <span className="font-extralight text-gray-400 text-lg">
                Tham khảo các ưu đãi hấp dẫn!
              </span>
            </div>
          </div>
          <div className="flex justify-between space-x-5">
            <div className="bg-gray-300 w-1/2 h-[600px] rounded-2xl">
              <img
                className="object-cover w-full h-full rounded-2xl shadow-2xl"
                src="https://vnpay.vn/s1/statics.vnpay.vn/2022/4/0tltkzcwj4c1649237153542.jpg"
                alt=""
              />
            </div>
            <div className=" w-1/2 flex flex-col justify-between gap-5 rounded-2xl">
              <img
                className="object-cover w-full h-full rounded-2xl shadow-xl"
                src="https://www.bambooairways.com/documents/20122/1926231/1920x360+vi+th%C3%A1i+y%C3%AAu+th%C6%B0%C6%A1ng.jpg/a40bab09-f903-23da-deeb-6ec827a97790?t=1731684393024"
                alt=""
              />
              <img
                className="object-cover w-full h-full rounded-2xl shadow-xl"
                src="https://www.bambooairways.com/documents/20122/1942980/1920+x+360+vi+su%E1%BA%A5t+%C4%83n.png/050f212a-af5b-019d-d51c-cb68df54383c?t=1733304982110"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="max-w-7xl mx-auto mt-[70px]">
          <h2 className="text-2xl font-semibold mb-6">Trip from HA NOI</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                city: "New York",
                image:
                  "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
                date: "10 Feb, 2023",
                duration: "7h 15m",
              },
              {
                city: "Los Angeles",
                image:
                  "https://drupal-prod.visitcalifornia.com/sites/default/files/styles/opengraph_1200x630/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=joYsp-KC",
                date: "10 Feb, 2023",
                duration: "6h 18m",
              },
              {
                city: "Tokyo",
                image:
                  "https://a.storyblok.com/f/239725/1500x1073/075e1a2f99/07_jp_tok_gallery_destination_tokyo-sskyline.png/m/3840x2747",
                date: "10 Feb, 2023",
                duration: "10h 30m",
              },
              {
                city: "Singapore",
                image:
                  "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/542000/542607-singapore.jpg",
                date: "10 Feb, 2023",
                duration: "3h 50m",
              },
              {
                city: "Bangkok",
                image:
                  "https://vietnam-tickets.com/images/du-lich/dia-diem-du-lich-bangkok/dia-diem-du-lich-bangkok-1.jpg",
                date: "10 Feb, 2023",
                duration: "2h 10m",
              },
            ].map((destination) => (
              <div
                key={destination.city}
                className="bg-white rounded-lg overflow-hidden shadow-xl"
              >
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.city}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {destination.city}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {destination.date}
                      </p>
                      <p className="text-sm text-gray-500">
                        {destination.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's New Section */}
        <div className="max-w-7xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">What's new?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "US flights delayed due to FAA system outage.",
                image:
                  "https://images2.thanhnien.vn/528068263637045248/2023/7/18/z4394880626923c4e0daf51255cb0394262443cb127b66-1689647645873786471722.jpg",
                date: "Dec 24, 2022",
                readTime: "5 mins read",
              },
              {
                title: "Insights from BCD Travel’s 2024 A&D Client Forum.",
                image:
                  "https://www.bcdtravel.com/wp-content/uploads/Blog_ADForumRecap_HERO_Dec2024.jpg",
                date: "Dec 24, 2022",
                readTime: "5 mins read",
              },
              {
                title: "Explore and live your best life.",
                image:
                  "https://spirit.vietnamairlines.com/wp-content/uploads/2023/08/3-Podcast-se-cung-voi-cac-chuyen-bay-Vietnam-Airlines-den-voi-hang-chuc-trieu-hanh-khach-moi-nam-tu-khap-noi-tren-the-gioi.-1-scaled.jpg",
                date: "Dec 24, 2022",
                readTime: "5 mins read",
              },
              {
                title: "Save money on your trip with 5 easy steps.",
                image:
                  "https://static2.abay.vn/Images/2023/04/19/luu-y-gi-o-san-bay-min.jpg",
                date: "Dec 24, 2022",
                readTime: "5 mins read",
              },
            ].map((article) => (
              <div
                key={article.title}
                className="bg-white rounded-lg overflow-hidden shadow-xl"
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{article.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center py-5">
            <Button type="primary" className="bg-green-500 rounded-2xl">
              Read more
            </Button>
          </div>
        </div>
      </main>

      {/* Sologan */}
      <div className="max-w-7xl mx-auto h-32 mt-4 mb-4">
          <div className="flex justify-center items-center py-5 space-x-5">
            <img src="https://www.bambooairways.com/documents/20122/770555/Bamboo_Logo.png/085880d0-8c6c-fbe7-20a7-bec464101694?t=1697600805504" alt="" />
            <p className="text-gray-400">|</p>
            <p className="text-2xl font-medium">HƠN CẢ MỘT CHUYẾN BAY</p>
          </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
