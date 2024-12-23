class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        # nums의 각 요소와 인덱스를 저장한 뒤 숫자를 기준으로 정렬
        nums_with_index = [(num, idx) for idx, num in enumerate(nums)]
        nums_with_index.sort(key=lambda x: x[0])  # 숫자를 기준으로 정렬

        # 투 포인터 초기화
        left = 0
        right = len(nums_with_index) - 1

        while left < right:
            current_sum = nums_with_index[left][0] + nums_with_index[right][0]
            if current_sum == target:
                # 원래 배열의 인덱스를 반환 (정렬 이전의 인덱스)
                return sorted([nums_with_index[left][1], nums_with_index[right][1]])
            elif current_sum < target:
                left += 1  # 합이 작으면 left를 오른쪽으로 이동
            else:
                right -= 1  # 합이 크면 right를 왼쪽으로 이동

        return []  # 조건을 만족하는 두 숫자가 없을 경우 빈 리스트 반환