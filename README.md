[Git 사용법]

1. 깃 설치
    brew install git

1. 깃허브에서 study 레포지토리 만들기

1. 클론 따기
    터미널에서 빈 폴더에 들어감
    git init
    git remote add origin https://github.com/hyosim77/study.git
    git clone --recursive https://github.com/hyosim77/study.git

1. config (최초이후론 다신 안해도 됨)
    git config --list 
    git config --global user.name "hyosim77"
    git config --global user.email "hyosim77@gmail.com"

1. 푸시
    저장 됐나 확인
    내용을 추가한다
    스테이징: git add .
    git commit -m "커밋한 내용 설명을 적음"
    git push origin master
