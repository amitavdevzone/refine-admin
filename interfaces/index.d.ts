export interface IPost {
  id: number;
  title: string;
  content: string;
  status: "draft" | "rejected" | "published";
}
