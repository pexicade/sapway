"use client";

import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="bg-[#F3F7F9] rounded-2xl flex flex-col transition-all">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 text-right"
      >
        <span className="text-[18px] font-medium">{question}</span>
        <ChevronDownIcon
          size={16}
          className={cn("transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && <div className="p-4 pt-0 text-[16px] leading-7">{answer}</div>}
    </div>
  );
}
