import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function StartRender({ rating }) {
  // Giới hạn rating trong khoảng 0 - 5
  const safeRating = Math.max(0, Math.min(rating, 5));

  const fullStars = Math.floor(safeRating);
  const halfStars = safeRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = Math.max(0, 5 - fullStars - halfStars); // tránh số âm

  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {/* sao đầy */}
      {Array.from({ length: fullStars }, (_, i) => (
        <FaStar key={`full-${i}`} color="#ffc107" />
      ))}

      {/* sao nửa */}
      {halfStars === 1 && <FaStarHalfAlt color="#ffc107" />}

      {/* sao rỗng */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <FaRegStar key={`empty-${i}`} color="#ccc" />
      ))}
    </div>
  );
}
