type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  author: string;
  content: string;
  thumbnail: string | null;
  tags: string[];
  created_at: string;
  updated_at: string;
};
