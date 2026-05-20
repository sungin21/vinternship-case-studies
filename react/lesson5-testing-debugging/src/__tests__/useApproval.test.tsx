import { renderHook, act } from "@testing-library/react";
import { useApproval } from "../hooks/useApproval";

test("approval works correctly", () => {
  const { result } = renderHook(() =>
    useApproval()
  );

  expect(result.current.approved).toBe(false);

  act(() => {
    result.current.approve();
  });

  expect(result.current.approved).toBe(true);
});