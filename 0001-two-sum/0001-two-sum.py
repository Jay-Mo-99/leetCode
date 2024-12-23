class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
                # 원래 인덱스를 보존하기 위해 nums의 각 요소와 인덱스를 함께 저장
        nums_with_index = [(num, idx) for idx, num in enumerate(nums)]
        # 숫자를 기준으로 정렬
        nums_with_index.sort(key=lambda x: x[0])

        # 투 포인터 초기화
        low, high = 0, len(nums_with_index) - 1

        while low < high:
            # 두 숫자의 합 계산
            total = nums_with_index[low][0] + nums_with_index[high][0]
            if total == target:
                # 합이 target과 같으면 인덱스 반환 (원래 인덱스를 반환해야 함)
                return [nums_with_index[low][1], nums_with_index[high][1]]
            elif total < target:
                # 합이 작으면 low 증가
                low += 1
            else:
                # 합이 크면 high 감소
                high -= 1

        return []  # 답이 없는 경우 (문제에서 보장되지만 안전장치로 추가)