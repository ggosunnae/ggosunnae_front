"use server";

const allDeleteAlarm = async () => {
  try {
    const res = await fetch("/user/my/alert/all", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const json = await res.json();
      throw new Error(json.message);
    }

    return res.json();
  } catch (err: any) {
    throw new Error(err);
  }
};

export default allDeleteAlarm;
