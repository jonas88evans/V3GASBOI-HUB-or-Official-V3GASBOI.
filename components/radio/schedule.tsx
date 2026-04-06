const scheduleItems = [
  {
    time: "00:00 - 06:00",
    name: "Late Night Hustle",
    description: "Chill beats & overnight grind music",
  },
  {
    time: "06:00 - 12:00",
    name: "Morning Grind",
    description: "High energy tracks to start the day",
  },
  {
    time: "12:00 - 18:00",
    name: "Midday Rotation",
    description: "Non-stop hip hop hits",
  },
  {
    time: "18:00 - 00:00",
    name: "Prime Time",
    description: "Peak hours, peak tracks",
  },
];

export function Schedule() {
  return (
    <div>
      <h2
        className="text-primary text-xl mb-5 uppercase tracking-widest"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        Broadcast Schedule
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {scheduleItems.map((item) => (
          <div
            key={item.time}
            className="bg-gradient-to-br from-muted to-background border border-border rounded-lg p-5 text-center transition-all hover:border-primary hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(220,38,38,0.2)]"
          >
            <div className="text-primary text-lg font-bold mb-2">
              {item.time}
            </div>
            <div className="text-foreground text-base mb-1">{item.name}</div>
            <div className="text-muted-foreground text-sm">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
