import axios from "axios";
interface APIEntry {
  API: string;
  Description?: string;
}
export const fetchData = async (setList: Function) => {
  try {
    const { data } = await axios.get("https://api.publicapis.org/entries");
    const listInfo = data.entries.slice(10, 20);
    const locale: string | null = JSON.parse(
      localStorage.getItem("contact") || "null"
    );
    setList(locale && locale.length > 0 ? locale : listInfo);
  } catch (err) {
    console.log(err);
  }
};
export const fetchTextChat = async (
  chatId: string,
  setLoading: Function,
  setList: Function
) => {
  try {
    setLoading(true);
    const { data } = await axios.get("https://api.publicapis.org/entries");
    const listInfo: APIEntry[] = data.entries.slice(0, 20);
    const filter = listInfo.filter(({ API }) => API === chatId);
    setList(filter);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
