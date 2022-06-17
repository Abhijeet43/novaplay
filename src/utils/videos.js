import {
  getVideosService,
  getCategoriesService,
  getSingleVideoService,
} from "../services/";

import { toast } from "react-toastify";

const getVideos = async (videoDispatch = "", setVideos = "") => {
  try {
    const response = await getVideosService();
    if (response.status === 200) {
      if (videoDispatch !== "") {
        videoDispatch({
          type: "LOAD_VIDEOS",
          payload: response.data.videos,
        });
      }
      if (setVideos !== "") {
        setVideos(response.data.videos);
      }
    } else {
      throw new Error("Something Went Wrong.. Try Again Later");
    }
  } catch (error) {
    toast.error("Error", error);
  }
  return videoDispatch;
};

const getCategories = async (videoDispatch) => {
  try {
    const response = await getCategoriesService();
    if (response.status === 200) {
      videoDispatch({
        type: "LOAD_CATEGORIES",
        payload: response.data.categories,
      });
    } else {
      throw new Error("Something Went Wrong.. Try Again Later");
    }
  } catch (error) {
    toast.error("Error", error);
  }
};

const getFeaturedVideos = (videos) =>
  videos.filter((video) => video.isFeatured);

const getFeaturedCategories = (categories) =>
  categories.filter((category) => category.isFeatured);

const getTrendingVideos = (videos) =>
  videos.filter((video) => video.isTrending);

const getVideo = async (videoId, setVideoDetails, navigate) => {
  try {
    const response = await getSingleVideoService(videoId);
    if (response.status === 200) {
      setVideoDetails(response.data.video);
      return response.data.video;
    } else {
      throw new Error("Something Went Wrong.. Try Again Later");
    }
  } catch (error) {
    toast.error(error);
    navigate("*");
  }
};

const getCategoryVideos = (category, id, videos) =>
  videos.filter((video) => video._id !== id && video.category === category);

const getCategoryFilteredVideos = (category, videos) => {
  if (category) {
    return videos.filter((video) => video.category === category);
  }
  return videos;
};

export {
  getVideos,
  getCategories,
  getFeaturedVideos,
  getFeaturedCategories,
  getTrendingVideos,
  getVideo,
  getCategoryVideos,
  getCategoryFilteredVideos,
};
