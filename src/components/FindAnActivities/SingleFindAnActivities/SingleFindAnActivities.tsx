"use client";

import { fakeParty } from "@/app/data/FakeData";
import { ColorPalette } from "@/theme/themes";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Tooltip } from "antd";
import Image from "next/image";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { MdAccessTime, MdOutlineDateRange } from "react-icons/md";

const SingleFindAnActivities = ({ id }: any) => {
  const party = fakeParty?.find((party: any) => party.id === id);
  console.log(party);

  return (
    <div>
      {/* top box area */}
      <div
        className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center gap-7 rounded-md overflow-hidden"
        style={{ background: `${ColorPalette.colorSecondaryBg}` }}
      >
        {/* image part */}
        <div>
          <Image
            src="/assets/images/login.png"
            alt="Logo"
            layout="responsive"
            width={100}
            height={100}
            style={{ maxHeight: "350px", width: "100%", objectFit: "cover" }}
          />
        </div>

        {/* article part */}
        <article className="p-5">
          <h1
            className="text-3xl font-semibold"
            style={{ color: `${ColorPalette?.colorTextPrimary}` }}
          >
            New Year Party 2025
          </h1>
          <h3
            style={{ color: `${ColorPalette?.colorTextSecondary}` }}
            className="text-xl mt-2"
          >
            2 Miles Away
          </h3>
          <p
            className="mt-2 text-base flex items-center justify-start"
            style={{ color: `${ColorPalette?.colorTextSecondary}` }}
          >
            <MdOutlineDateRange />{" "}
            <span className="ml-2">Sun, January 19, 2025</span>
          </p>
          <p
            className="mt-2 text-base flex items-center justify-start"
            style={{ color: `${ColorPalette?.colorTextSecondary}` }}
          >
            <MdAccessTime /> <span className="ml-2">6:00 PM - 10:00 PM</span>
          </p>

          {/* button */}
          <div className="flex items-center justify-start mt-5">
            <Button type="primary">Attend</Button>
            <Button
              style={{ marginLeft: "10px", background: "none", color: "#fff" }}
            >
              Share
            </Button>
          </div>
        </article>
      </div>

      {/* bottom article */}
      <article className="flex flex-col lg:flex-row gap-[20px]">
        <div className="w-full lg:w-[65%]">
          {/* <!-- Content for the first child --> */}

          {/* activities */}
          <div
            className="mt-5 rounded-md p-5"
            style={{
              background: `${ColorPalette?.colorSecondaryBg}`,
              color: `${ColorPalette?.colorTextPrimary}`,
            }}
          >
            <h2 className="font-semibold text-xl">Activity Details</h2>

            <p className="text-base mt-3">Theme - Black Dress Code</p>
            <p className="text-base mt-1">Activity - Party</p>
            <p className="text-base mt-1">Age Range - 18-20 Years</p>
            <p className="text-base mt-1">
              Number of guests per participant - 2
            </p>
          </div>

          {/* avatar */}
          <div
            className="flex items-center justify-between mt-5 rounded-md p-5"
            style={{
              background: `${ColorPalette?.colorSecondaryBg}`,
              color: `${ColorPalette?.colorTextPrimary}`,
            }}
          >
            <div>
              <h2 className="text-xl font-semibold">Attendees</h2>
              <p className="text-base">13/120</p>
            </div>

            <Avatar.Group
              max={{
                count: 2,
                style: { color: "#f56a00", backgroundColor: "#fde3cf" },
              }}
            >
              <Avatar src="https://randomuser.me/api/portraits/men/21.jpg" />
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{ backgroundColor: "#1677ff" }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
          </div>

          {/* Map */}
          <div
            className="lg:flex items-center justify-between rounded-md mt-5 gap-8"
            style={{ background: `${ColorPalette.colorSecondaryBg}` }}
          >
            <div className="w-full lg:w-[20%]">
              <Image
                src="/assets/images/login.png"
                alt="Logo"
                layout="responsive"
                width={100}
                height={100}
                style={{
                  maxHeight: "350px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              className="w-full lg:w-[80%] lg:flex items-center justify-between p-5"
              style={{ color: `${ColorPalette?.colorTextPrimary}` }}
            >
              <div className="mb-7 lg:mb-0">
                <h2 className="text-xl font-semibold">Location</h2>
                <p className="text-base">
                  6035 NW 39th St, Virginia Gardens, FL 33166, USA
                </p>
              </div>

              <Button
                style={{
                  background: "none",
                  padding: "15px 22px",
                  color: "#fff",
                }}
              >
                View Map
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[35%]">
          {/* <!-- Content for the last child --> */}
          {/* note */}
          <div
            className="mt-5 p-5 rounded-md pb-28"
            style={{
              background: `${ColorPalette.colorSecondaryBg}`,
              color: `${ColorPalette?.colorTextPrimary}`,
            }}
          >
            <h2 className="font-semibold text-xl">Note</h2>
            <p className="mt-3">💌 Note for Participants:</p>
            <ul className="pl-5">
              <li>
                Parking is limited, so consider carpooling or using public
                transport.
              </li>
              <li>Only participants within a 10-mile radius are eligible.</li>
            </ul>
            <p>Let’s make it a night to remember! 🌟</p>
          </div>

          {/*Activity Host*/}
          <div
            className="mt-5 p-5 rounded-md"
            style={{
              background: `${ColorPalette.colorSecondaryBg}`,
              color: `${ColorPalette?.colorTextPrimary}`,
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Activity Host</h2>
                <div className="flex items-center justify-start mt-3">
                  <Avatar size="default" />
                  <h3 className="ml-3 text-base">Robert Smith, 21</h3>
                </div>
              </div>

              <button>
                <HiOutlineArrowTopRightOnSquare className="text-2xl" />{" "}
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SingleFindAnActivities;
