import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
      const storedList = JSON.parse(storedListStr);
      return storedList;
    } else {
      return [];
    }
  };
  
  const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
      alert("Already Listed");
    } else {
      storedList.push(id);
      const storedListStr = JSON.stringify(storedList);
      localStorage.setItem('read-list', storedListStr);
      toast('The Book is Added')
    }
  };


  const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
      const storedList = JSON.parse(storedListStr);
      return storedList;
    } else {
      return [];
    }
  };
  
  const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
      alert("Already in Wishlist");
    } else {
      storedList.push(id);
      const storedListStr = JSON.stringify(storedList);
      localStorage.setItem('wish-list', storedListStr);
      toast('The Book is Added to Wish List')
    }
  };
  
  export { addToStoredReadList,addToStoredWishList,getStoredReadList,getStoredWishList };
  