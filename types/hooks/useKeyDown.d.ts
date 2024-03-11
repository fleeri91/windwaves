interface UseKeyDownProps {
    key: string;
    callback: () => void;
}
declare const useKeyDown: ({ key, callback }: UseKeyDownProps) => void;
export default useKeyDown;
