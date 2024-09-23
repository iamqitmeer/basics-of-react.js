import { Button, Image } from "@nextui-org/react";
import React from "react";

function ProfileDetails() {
  return (
    <div className="w-[35%] flex items-center justify-center flex-col">
      <div className="text-white">
        <Image
          radius="full"
          isBlurred
          width={240}
          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          alt="NextUI Album Cover"
          className="m-5"
        />
        <h1 className="text-3xl font-bold mb-1">Qitmeer Raza</h1>
        <p className="text-xl text-[#1F75EC] mb-3">iamqitmeer</p>

        <p className="text-medium text-md mb-3">
          Learning, creating, and evolving lines code at a time 🧑‍💻
        </p>
        <Button className="text-lg w-full mb-4" color="primary" variant="flat">
          <p className="py-6">
            <i class="ri-arrow-right-circle-fill"></i> See on Github
          </p>
        </Button>

        <div className="flex justify-center flex-col gap-1 mb-8">
          <p className="text-md">
            <i class="ri-facebook-circle-fill mr-2"></i> iamqitmeer_fb
          </p>
          <p className="text-md">
            <i class="ri-twitter-fill mr-2"></i>
            iamqitmeer_twtr
          </p>
          <p className="text-md">
            <i class="ri-instagram-fill mr-2"></i>
            iamqitmeer_isn
          </p>
        </div>

        <div className="flex justify-center flex-col gap-1 mb-8">
          <p className="font-extralight">
            {" "}
            <span className="font-bold">142</span> Repos
          </p>
          <p className="font-extralight">
            {" "}
            <span className="font-bold">142</span> Followers
          </p>
          <p className="font-extralight">
            {" "}
            <span className="font-bold">142</span> Following
          </p>
        </div>


        <p className="mb-8">
          <i class="ri-copyright-line"></i> 2024{" "}
          <a href="https://github.com/iamqitmeer" target="blank">
            iamqitmeer
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProfileDetails;
