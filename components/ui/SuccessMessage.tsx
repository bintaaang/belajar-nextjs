"use client";

type SuccessMessageProps = {
  message: string;
};

export default function SuccessMessage({ message }: SuccessMessageProps) {
  return (
    <div className="bg-green-100 text-green-800 border border-green-300 rounded-md p-4 mb-4 text-sm">
      {message}
    </div>
  );
}
