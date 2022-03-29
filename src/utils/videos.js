import { getVideosService, getCategoriesService } from "../services/";

const getVideos = async (videoDispatch) => {
  try {
    const response = await getVideosService();
    if (response.status === 200) {
      videoDispatch({
        type: "LOAD_VIDEOS",
        payload: response.data.videos,
      });
    } else {
      throw new Error("Something Went Wrong.. Try Again Later");
    }
  } catch (error) {
    console.log("Error", error);
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
    console.log("Error", error);
  }
};

const getFeaturedVideos = (videos) =>
  videos.filter((video) => video.isFeatured);

const getFeaturedCategories = (categories) =>
  categories.filter((category) => category.isFeatured);

const getTrendingVideos = (videos) =>
  videos.filter((video) => video.isTrending);

const getVideo = (videoId, videos) =>
  videos.find((video) => video._id === videoId);

const getCategoryVideos = (category, id, videos) =>
  videos.filter((video) => video._id !== id && video.category === category);

export {
  getVideos,
  getCategories,
  getFeaturedVideos,
  getFeaturedCategories,
  getTrendingVideos,
  getVideo,
  getCategoryVideos,
};
