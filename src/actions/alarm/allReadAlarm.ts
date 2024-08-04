"use server";

const allReadAlarm = async () => {
  try {
    const res = await fetch("/", {
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

export default allReadAlarm;
