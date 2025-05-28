export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list.🚀 </em>
      </p>
    );
  }
  const numPacked = items.filter((i) => i.packed).length;
  const numItems = items.length;
  let percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "🎉 You got everything! Ready to go! Bon Voyage ✈️"
          : `⛱️ You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
