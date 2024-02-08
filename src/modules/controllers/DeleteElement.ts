import { Api } from "../../utils/api";

const DeleteElement = (url: string, id: string) => {
  async function deleteOne() {
    Api.delete(url + id)
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteOne();
};

export default DeleteElement;
