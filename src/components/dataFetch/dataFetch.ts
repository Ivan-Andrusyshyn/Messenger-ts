import axios from "axios";
interface APIEntry {
  API: string;
  Description?: string;
}
const baseUrl = "https://api.publicapis.org/entries";

const fetchBase = async (): Promise<APIEntry[]> => {
  const { data } = await axios.get(`${baseUrl}`);
  const listInfo = data.entries.slice(10, 20);
  return listInfo;
};
export const fetchData = async (setList: Function) => {
  try {
    const data = await fetchBase();
    const locale: string | null = JSON.parse(
      localStorage.getItem("contact") || "null"
    );
    setList(locale && locale.length > 0 ? locale : data);
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
    const data = await fetchBase();
    const filter = data.filter(({ API }) => API === chatId);
    setList(filter);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
