import React from "react";
import { Button  } from "antd";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="">
        {/* Banner */}
        <Banner/>

        {/* Flight Search Section */}
        

        {/* Popular Destinations */}
        <div className="max-w-7xl mx-auto mt-40">
          <h2 className="text-xl font-semibold mb-6">Trip from Houston</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                city: "New York",
                image: "https://via.placeholder.com/300x200",
                price: 294,
                date: "10 Feb, 2023",
                duration: "7h 15m",
              },
              {
                city: "Los Angeles",
                image: "https://via.placeholder.com/300x200",
                price: 399,
                date: "10 Feb, 2023",
                duration: "6h 18m",
              },
            ].map((destination) => (
              <div
                key={destination.city}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
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
                    <div className="text-xl font-bold text-purple-600">
                      ${destination.price}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "US flights delayed due to FAA system outage.",
                image: "https://via.placeholder.com/300x200",
                date: "Dec 24, 2022",
                readTime: "5 mins read",
              },
              {
                title: "Explore and live your best life.",
                image: "https://via.placeholder.com/300x200",
                date: "Dec 24, 2022",
                readTime: "5 mins read",
              },
              {
                title: "Save money on your trip with 5 easy steps.",
                image: "https://via.placeholder.com/300x200",
                date: "Dec 24, 2022",
                readTime: "5 mins read",
              },
            ].map((article) => (
              <div
                key={article.title}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
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
          <div className="text-center py-4">
            <Button type="primary" className="bg-green-500">
              Read more articles
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
