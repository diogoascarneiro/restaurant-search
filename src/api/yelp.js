import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer XoeCNjps35YU21H_SQue8-XX8e-e1JxZl-Ti0_Bh6Hol2-3JBWLd62GipCAakR8e_DKO5VniJLxKCmNNOqdNU4ynzsaX22DSEDlsadjBRJ4hs4o8hS0hO_l7xmCHY3Yx",
  },
});
