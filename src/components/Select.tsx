import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
// let divOption = [
//   {
//     data: "a1",
//   },
//   {
//     data: "a2",
//   },
//   {
//     data: "a3",
//   },
//   {
//     data: "a4",
//   },
// ];

export default function Select() {
  const [focus, setFocus] = useState(false);
  const [value, changeValue] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const [divOption, setDivOption] = useState([
    { data: "a1" },
    { data: "a2" },
    { data: "a3" },
    { data: "a4" },
  ]);

  const [insert, setInsert] = useState(null);

  const addTags = (e: any) => {
    // console.log(e.target.value);
    // if (e.key === "Enter" && e.target.value !== "") {
    //   // setDivOption(prevState => [...prevState, {data:e.target.value}]);
    //   setTags([...tags, e?.target.value, insert]);
    //   //   tags.filter((item) => setDivOption(item => [...item, {data}]) )
    //   e.target.value = "";
    // } else {
    //   if (tags.indexOf(e.target.textContent) === -1) {
    //     setTags([...tags, e.target.textContent]);
    //   }
    // }
  };
  console.log(tags)
  const removeTags = (indexRemove: any) => {
    setTags(tags.filter((_, index) => index !== indexRemove));
  };

  const handleToggle = (e:any, indexRemove: any) => {
    if (e.key === "Enter" && e.target.value !== "") {
        // setDivOption(prevState => [...prevState, {data:e.target.value}]);
        setTags([...tags, e?.target.value, insert]);
        //   tags.filter((item) => setDivOption(item => [...item, {data}]) )
        e.target.value = "";
      }
    if (tags.indexOf(e.target.textContent) === -1) {
      setTags([...tags, e.target.textContent]);
    }
     else {
      setTags(tags.filter((_, index) => index !== indexRemove));
    }
  };
  console.log(tags)
  useEffect(() => {
    let handleDiv = () => {
      setFocus(false);
    };
    document.addEventListener("mouseup", handleDiv);
  }, []);
  //   console.log(value)
  return (
    <section className="w-1/4 mx-auto px-1 mt-10">
      <div
        className="flex justify-between items-center border rounded p-2"
        onClick={() => setFocus(true)}
      >
        <div className="flex">
          <div className="flex flex-wrap gap-1">
            {tags.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center bg-[#f0f0f0] rounded mx-1"
                >
                  <span className="mx-1">{item}</span>
                  <RxCross2
                    size={15}
                    className="cursor-pointer"
                    onClick={() => removeTags(index)}
                  />
                </div>
              );
            })}
          </div>
          <div className="inline-flex">
            <div
              className={`w-${Math.min(Math.max(value.length, 2), 50) + "ch"}`}
            >
              <input
                type="text"
                // value={value}
                // onChange={(event) => {
                //   changeValue(event.target.value);
                // }}
                onChange={(e) => setInsert(e.target.value as any)}
                className="outline-none border-none w-full min-w-[4px]"
                // onKeyUp={(e) => (e.key === "Enter" ? addTags(e) : null)}
              />
            </div>
          </div>
        </div>
        <div>
          <span>
            <AiOutlineDown />
          </span>
        </div>
      </div>
      <div className={`p-2 shadow mt-1 ${focus ? "visible" : "hidden"}`}>
        {insert ? (
          <div className="cursor-pointer hover:bg-slate-100 hover:rounded p-1" onClick={(e) =>handleToggle(e)}>
            {insert}
          </div>
        ) : (
          divOption.map((item, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer hover:bg-slate-100 hover:rounded p-1"
                onClick={(e) => handleToggle(e, index)}
              >
                {item.data}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
