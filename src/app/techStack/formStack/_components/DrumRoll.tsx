"use client";

import { useState, useRef, useEffect } from "react";

// 日数を月ごとに動的に変える関数
const getDaysInMonth = (year: number, month: number): number[] => {
  const days = new Date(year, month, 0).getDate(); // 月を+1した日付の0日目＝末日
  return Array.from({ length: days }, (_, i) => i + 1);
};

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);

export default function DrumRollDatePicker() {
  const [selectedYear, setYear] = useState(currentYear);
  const [selectedMonth, setMonth] = useState(1);
  const [selectedDay, setDay] = useState(1);

  const days = getDaysInMonth(selectedYear, selectedMonth);

  useEffect(() => {
    // 日の上限が変わる場合、オーバーしていたら修正
    if (selectedDay > days.length) {
      setDay(days.length);
    }
  }, [selectedYear, selectedMonth, selectedDay, days.length]);

  return (
    <div className="flex justify-center items-center gap-8 p-8 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          日付を選択
        </h2>
        <div className="flex justify-center gap-4">
          <RollColumn
            label="年"
            items={years}
            selected={selectedYear}
            onChange={setYear}
          />
          <RollColumn
            label="月"
            items={months}
            selected={selectedMonth}
            onChange={setMonth}
          />
          <RollColumn
            label="日"
            items={days}
            selected={selectedDay}
            onChange={setDay}
          />
        </div>
        <div className="mt-6 text-center">
          <div className="text-lg font-semibold text-gray-700">
            選択された日付
          </div>
          <div className="text-xl font-bold text-blue-600">
            {selectedYear}年{selectedMonth}月{selectedDay}日
          </div>
        </div>
      </div>
    </div>
  );
}

function RollColumn({
  label,
  items,
  selected,
  onChange,
}: {
  label: string;
  items: number[];
  selected: number;
  onChange: (value: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemHeight = 40;
  const visibleItems = 5;
  const containerHeight = itemHeight * visibleItems;
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // スクロール位置に基づいて現在のアイテムを取得
  const getItemAtScrollPosition = () => {
    if (!containerRef.current) return selected;
    const scrollTop = containerRef.current.scrollTop;
    const centerOffset = containerHeight / 2 - itemHeight / 2;
    const index = Math.round((scrollTop + centerOffset) / itemHeight);
    const clampedIndex = Math.max(0, Math.min(index, items.length - 1));
    return items[clampedIndex];
  };

  // スクロールイベントハンドラー
  const handleScroll = () => {
    if (!containerRef.current) return;

    // 既存のタイムアウトをクリア
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // スクロールが止まったら選択を更新し、位置を調整
    scrollTimeout.current = setTimeout(() => {
      const itemAtPosition = getItemAtScrollPosition();
      if (itemAtPosition !== selected) {
        onChange(itemAtPosition);
      }

      // 選択されたアイテムの中央にスナップ
      const selectedIndex = items.indexOf(itemAtPosition);
      const targetScrollTop =
        selectedIndex * itemHeight - containerHeight / 2 + itemHeight / 2;

      if (
        containerRef.current &&
        Math.abs(containerRef.current.scrollTop - targetScrollTop) > 1
      ) {
        containerRef.current.scrollTo({
          top: targetScrollTop,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  // selectedが変更されたときの初期位置設定
  useEffect(() => {
    if (containerRef.current) {
      const selectedIndex = items.indexOf(selected);
      if (selectedIndex !== -1) {
        const scrollTop =
          selectedIndex * itemHeight - containerHeight / 2 + itemHeight / 2;
        containerRef.current.scrollTop = scrollTop;
      }
    }
  }, [selected, items, itemHeight, containerHeight]);

  // アイテムクリック時のハンドラー
  const handleItemClick = (item: number) => {
    onChange(item);
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm font-medium text-gray-600 mb-2">{label}</span>
      <div className="relative">
        {/* 選択枠 */}
        <div
          className="absolute left-0 right-0 bg-blue-50 border-2 border-blue-300 rounded-md pointer-events-none"
          style={{
            height: itemHeight,
            top: (containerHeight - itemHeight) / 2,
            zIndex: 0,
          }}
        />

        {/* スクロール可能なコンテナ */}
        <div
          ref={containerRef}
          className="w-20 overflow-y-auto scrollbar-hide bg-white border-2 border-gray-200 rounded-lg"
          style={{ height: containerHeight }}
          onScroll={handleScroll}
        >
          {/* 上部パディング */}
          <div style={{ height: (containerHeight - itemHeight) / 2 }} />

          {items.map((item) => (
            <div
              key={item}
              onClick={() => handleItemClick(item)}
              className={`flex items-center justify-center cursor-pointer transition-colors duration-200 relative ${
                item === selected
                  ? "text-blue-600 font-bold text-lg"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
              style={{ height: itemHeight, zIndex: 1 }}
            >
              {item}
            </div>
          ))}

          {/* 下部パディング */}
          <div style={{ height: (containerHeight - itemHeight) / 2 }} />
        </div>
      </div>
    </div>
  );
}
