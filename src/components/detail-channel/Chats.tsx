const Chats = () => {
  return (
    <div className="space-y-8">
      {dummyData.map((data) => (
        <div
          className={`flex gap-5 items-start ${
            data.name === "Alvittoag" &&
            "flex flex-row-reverse item gap-4 items-start"
          }`}
        >
          <img src={data.image} className="rounded-full w-[3em] h-[3em]" />

          <div>
            <h1
              className={`font-semibold ${
                data.name === "Alvittoag" && "text-end"
              }`}
            >
              {data.name}
            </h1>
            <div className="bg-[#212329] mt-2 -ml-1 py-3 px-5 rounded-md max-w-md">
              <p className="text-white/980">{data.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;

interface IDummData {
  name: string;
  message: string;
  image: string;
}

const dummyData: IDummData[] = [
  {
    name: "Alvittoag",
    message: "Apa hayosdfdsfdsfdsjfdskfjkdsjf",
    image:
      "https://scontent.fcgk33-1.fna.fbcdn.net/v/t39.30808-6/299183962_1504328420011802_3456514305754161712_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZdwyUfR1erwAX___Asn&_nc_ht=scontent.fcgk33-1.fna&oh=00_AfCGZt1O6UXMeFmBs9yYlaqrkXL6z1bEx-zvS47wloBC0w&oe=64397FAE",
  },
  {
    name: "anggun",
    message: "Apa hayo",
    image:
      "https://scontent.fcgk33-1.fna.fbcdn.net/v/t39.30808-6/243071809_1287191601725486_3971480056077451387_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=gcGjlg3igYgAX_EzQhx&_nc_ht=scontent.fcgk33-1.fna&oh=00_AfBqcr0y49QqLyVBTICCr-ubNSyZyY9oA5YRFXCwlxsCYQ&oe=6439ECA8",
  },
  {
    name: "Alvittoag",
    message: "Apa yaa eaaaaaa",
    image:
      "https://scontent.fcgk33-1.fna.fbcdn.net/v/t39.30808-6/299183962_1504328420011802_3456514305754161712_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZdwyUfR1erwAX___Asn&_nc_ht=scontent.fcgk33-1.fna&oh=00_AfCGZt1O6UXMeFmBs9yYlaqrkXL6z1bEx-zvS47wloBC0w&oe=64397FAE",
  },
  {
    name: "anggun",
    message: "hehe",
    image:
      "https://scontent.fcgk33-1.fna.fbcdn.net/v/t39.30808-6/243071809_1287191601725486_3971480056077451387_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=gcGjlg3igYgAX_EzQhx&_nc_ht=scontent.fcgk33-1.fna&oh=00_AfBqcr0y49QqLyVBTICCr-ubNSyZyY9oA5YRFXCwlxsCYQ&oe=6439ECA8",
  },
];
