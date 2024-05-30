import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, fullArticle, tags) => {
    const date = new Date().toLocaleDateString();
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        fullArticle: fullArticle,
        userId: userId,
        tags: tags,
        date: date,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    fullArticle:
      "Hi Friends, I am going to Mumbai for my vacations. I have been planning this trip for months, and now the time has finally come. Mumbai, the city of dreams, is known for its vibrant culture, stunning architecture, and delicious street food. I am particularly excited to visit the Gateway of India, Marine Drive, and the famous Juhu Beach. I have also planned to explore the local markets and indulge in some shopping. This vacation is a much-needed break from the hustle and bustle of daily life. I hope to enjoy a lot and create unforgettable memories. Peace out.",
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
    date: "03/18/2023",
  },
  {
    id: "2",
    title: "Paas ho gaya bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    fullArticle:
      "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe. College life has been an incredible journey filled with countless memories, friendships, and experiences. From late-night study sessions to spontaneous trips, every moment has been special. Despite all the fun and distractions, we managed to pass our exams and come out victorious. This achievement is a testament to our hard work, perseverance, and the support of our friends and family. As we move on to the next phase of our lives, these memories will always hold a special place in our hearts. Cheers to all of us!",
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
    date: "05/12/2024",
  },
  {
    id: "3",
    title: "My First Marathon",
    body: "Just completed my first marathon today! It was an incredible experience.",
    fullArticle:
      "Just completed my first marathon today! It was an incredible experience. Running a marathon has always been on my bucket list, and I finally achieved it. The journey was challenging, both physically and mentally, but crossing the finish line made it all worth it. The energy and support from fellow runners and spectators were amazing. Along the way, I learned a lot about discipline, determination, and the importance of setting goals. This marathon has inspired me to continue pushing my limits and striving for new achievements. To anyone considering running a marathon, I say go for it! You won't regret it.",
    userId: "user-5",
    tags: ["Marathon", "Fitness", "Achievement"],
    date: "02/18/2022",
  },
  {
    id: "4",
    title: "New Recipe: Chocolate Cake",
    body: "Tried baking a chocolate cake today. It turned out to be delicious. Sharing the recipe here!",
    fullArticle:
      "Tried baking a chocolate cake today. It turned out to be delicious. Sharing the recipe here! Baking has always been a passion of mine, and today I decided to try my hand at a classic chocolate cake. The recipe was simple, with basic ingredients like flour, sugar, cocoa powder, and eggs. The key to a moist and fluffy cake is to mix the ingredients just right and bake at the correct temperature. The end result was a rich, decadent chocolate cake that everyone loved. Whether you're a seasoned baker or a beginner, this recipe is sure to impress. Give it a try and enjoy!",
    userId: "user-7",
    tags: ["Baking", "Recipe", "Chocolate Cake"],
    date: "05/13/2024",
  },
  {
    id: "5",
    title: "Weekend Getaway",
    body: "Spent the weekend in the mountains. It was a refreshing break from the city life.",
    fullArticle:
      "Spent the weekend in the mountains. It was a refreshing break from the city life. The serene beauty of the mountains provided the perfect backdrop for relaxation and rejuvenation. I stayed in a cozy cabin, surrounded by nature, with breathtaking views of the peaks and valleys. During the day, I went hiking on scenic trails, explored hidden waterfalls, and enjoyed picnics by the lakeside. The fresh air and peaceful environment helped me disconnect from the daily grind and recharge my energy. Evenings were spent by the fireplace, reading a book or simply enjoying the tranquility. This getaway was exactly what I needed.",
    userId: "user-3",
    tags: ["Travel", "Mountains", "Weekend"],
    date: "05/01/2024",
  },
  {
    id: "6",
    title: "Tech Conference 2024",
    body: "Attended the Tech Conference 2024. Learned about the latest trends in AI and blockchain.",
    fullArticle:
      "Attended the Tech Conference 2024. Learned about the latest trends in AI and blockchain. The conference brought together industry leaders, experts, and enthusiasts from around the world to discuss and showcase the future of technology. Sessions covered a wide range of topics, including artificial intelligence, blockchain technology, cybersecurity, and more. I was particularly impressed by the advancements in AI, from machine learning algorithms to real-world applications. The blockchain sessions highlighted the potential of decentralized systems and their impact on various industries. Networking with like-minded individuals and learning from the best in the field made this conference an enriching experience.",
    userId: "user-11",
    tags: ["Tech", "Conference", "AI", "Blockchain"],
    date: "05/11/2024",
  },
  {
    id: "7",
    title: "Book Review: The Alchemist",
    body: "Finished reading The Alchemist by Paulo Coelho. It's a must-read for everyone.",
    fullArticle:
      "Finished reading The Alchemist by Paulo Coelho. It's a must-read for everyone. The story follows a young shepherd named Santiago on his journey to discover his personal legend and fulfill his dreams. Along the way, he meets various characters who impart valuable life lessons and wisdom. The book is beautifully written, with a simple yet profound narrative that resonates with readers of all ages. It encourages us to follow our hearts, pursue our passions, and believe in the power of our dreams. The Alchemist is a timeless tale that inspires and motivates, making it a must-read for anyone seeking purpose and fulfillment.",
    userId: "user-8",
    tags: ["Book Review", "The Alchemist", "Reading"],
    date: "05/18/2023",
  },
  {
    id: "8",
    title: "Photography Tips",
    body: "Sharing some tips and tricks for capturing the perfect landscape photos.",
    fullArticle:
      "Sharing some tips and tricks for capturing the perfect landscape photos. As a photography enthusiast, I've learned that capturing stunning landscapes requires more than just a good camera. Here are some tips to help you improve your landscape photography: 1. Use a tripod for stability and sharper images. 2. Shoot during the golden hours (early morning or late afternoon) for the best lighting. 3. Experiment with different compositions and angles. 4. Use leading lines to draw the viewer's eye into the photo. 5. Pay attention to the weather and be patient for the perfect shot. By following these tips, you'll be able to capture breathtaking landscapes.",
    userId: "user-4",
    tags: ["Photography", "Tips", "Landscape"],
    date: "04/18/2024",
  },
  {
    id: "9",
    title: "Learning Guitar",
    body: "Started learning guitar. It's challenging but also very rewarding.",
    fullArticle:
      "Started learning guitar. It's challenging but also very rewarding. Music has always been a passion of mine, and I decided to take the plunge and learn to play the guitar. The initial stages are tough, with sore fingers and trying to get the chords right, but the sense of accomplishment when you play your first song is unmatched. I am currently taking online lessons and practicing daily. The guitar is a versatile instrument that allows for creativity and expression. Whether you want to play classical, rock, or blues, the possibilities are endless. Learning guitar has been a fulfilling journey so far, and I can't wait to get better at it.",
    userId: "user-10",
    tags: ["Music", "Guitar", "Learning"],
    date: "02/18/2024",
  },
  {
    id: "10",
    title: "Gardening Tips",
    body: "Here are some useful gardening tips for beginners.",
    fullArticle:
      "Here are some useful gardening tips for beginners. Gardening is a relaxing and rewarding hobby that allows you to connect with nature and grow your own plants. Whether you have a small balcony or a large backyard, these tips will help you get started: 1. Choose the right plants for your climate and soil. 2. Water your plants regularly, but don't overwater. 3. Use quality soil and fertilizers to provide nutrients. 4. Prune your plants to encourage growth and remove dead leaves. 5. Protect your garden from pests and diseases. By following these tips, you'll be able to create a thriving garden and enjoy the fruits of your labor.",
    userId: "user-6",
    tags: ["Gardening", "Tips", "Beginners"],
    date: "04/07/2024",
  },
];

export default PostListProvider;
