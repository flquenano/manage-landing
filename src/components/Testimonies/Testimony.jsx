import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./testimony.scss";

import TestimonyItem from "./TestimonyItem.jsx";

import Anisha from "assets/png/avatar-anisha.png";
import Ali from "assets/png/avatar-ali.png";
import Richard from "assets/png/avatar-richard.png";
import Shanai from "assets/png/avatar-shanai.png";

const Testimonies = () => {
  const profiles = [
    {
      avatar: Anisha,
      name: "Anisha Lio",
      comment:
        "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
    },
    {
      avatar: Ali,
      name: "Ali Bravo",
      comment:
        " “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
    },
    {
      avatar: Richard,
      name: "Richard Watts",
      comment:
        "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
    },
    {
      avatar: Shanai,
      name: "Shanai Gough",
      comment:
        "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
    }
  ];

  return (
    <section className="testimony">
      <h1 class="testimony__header heading">What they’ve said</h1>
      <Splide
        options={{
          perPage: 3,
          breakpoints: {
            1920: {
              perPage: 3
            },
            1366: {
              perPage: 2
            },
            550: {
              perPage: 1
            }
          }
        }}
      >
        {profiles.map((profile, idx) => (
          <SplideSlide>
            <TestimonyItem
              key={idx}
              avatar={profile.avatar}
              name={profile.name}
              comment={profile.comment}
            />
          </SplideSlide>
        ))}
      </Splide>
      <div class="testimony__btn">
        <button class="btn bg-br">Get Started</button>
      </div>
    </section>
  );
};

export default Testimonies;
