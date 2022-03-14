## < git >

> **git branch** : 브랜치 목록 확인
>
> **git branch 브랜치 이름** : 새로운 브랜치 생성
>
> **git branch -d 브랜치 이름** : 특정 브랜치 삭제(병합된 브랜치만 삭제)
>
> **git branch -D 브랜치 이름** : 강제 삭제
>
> **git switch 브랜치 이름** : 다른 브랜치로 이동
>
> **git switch -c 브랜치 이름** : 브랜치를 새로 생성과 동시에 이동

---

## <merge(병합)>

> **git merge 병합할 브랜치 이름** : merge 하기 전에 일단 다른 브랜치를 합치려고 하는, 즉 메인 브랜치로 switch해야 한다.

- fast-forward
- 3-way merge(merge commit)
- merge conflict
  - merge하는 두 브랜치에서 같은 파일의 같은 부분을 동시에 수정하고 merge하면, git은 해당 부분을 자동으로 merge 해주지 못한다.
  - 반면에, 동일 파일이더라도 서로 다른 부분을 수정했다면 conflict없이 자동으로 merge commit 된다.
