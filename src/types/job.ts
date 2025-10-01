type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Job = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  position: string;
  location: string;

  type: string;
  content: string;
};
