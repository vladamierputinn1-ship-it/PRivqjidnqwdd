
const words = [
  "Velvet", "Marble", "Golden", "Silver", "Crystal",
  "Autumn", "Winter", "Willow", "Meadow", "Cobalt",
  "Lunar", "Maple", "Satin", "Coral", "Amber",
  "Cedar", "Jasmine", "Ocean", "Misty", "Orchid"
];

export default async (request) => {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  return Response.json({
    error: "Verification backend is not configured yet. We need to connect secure storage before this can work."
  }, { status: 503 });
};
