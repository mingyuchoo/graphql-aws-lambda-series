# Apollo server for AWS Lambda

## 시작하기 전에

`yarn` 명령어를 사용하려면 `npm install --global yarn`으로 먼저 설치하세요.
`yarn`이 사용된 부분을 `npm run` 으로 바꿔서 실행해도 됩니다.

- AWS 계정이 있어야 합니다.
- `aws cli`, `sam cli`를 설치하세요.
- `aws configure` 명령을 이용해서 자신의 aws 정보를 저장하세요.
- AWS 콘솔에 들어가 S3 버켓을 만들고 `package.json`파일에 있는 `<bucket-name>` 부분을 생성한 S3 버켓이름으로 바꿉니다.

## 기능 추가 방법

- `prisma/schema.prisma` 를 수정합니다.
- `yarn create-migration` 를 실행해서 마이그레이션을 만들고 DB에 변경본을 반영합니다.
- `yarn migrate-database` DB에 반영만 합니다. (선택)
- `pal g` 를 실행해서 code를 자동 생성합니다.
- `yarn generate` 를 실행해서 필요한 타입을 생성합니다.

## 빌드하는 방법

- `yarn clean`: `dist`디렉토리와 `package.yml` 파일을 삭제합니다.
- `yarn lint`: Lint를 실행합니다.
- `yarn build`: `src` 소스 파일을 트랜스파일해서 `dist`에 빌드합니다.
- `yarn sam:validate`: `template.yml` 파일에 오류가 없는지 검증합니다.
- `yarn sam:package`: `template.yml`을 이용하여 `package.yml` 파일을 만듭니다.
- `yarn sam:deploy`: `package.yml` 을 이용하여 AWS 자원을 만듭니다.

## 테스트 방법

- insomnia를 다운로드 받아 `tests/insomnia` 디렉토리 아래에 있는 파일을 `import` 한 뒤 본인의 AWS access point `URI`를 바꿔서 실행하세요.

## 이슈

- `tsconfig.json`에 `strict` 를 `false`로 설정해 놓은 상태입니다. 타입을 제대로 정의하고 활성화하세요.
- `.eslintrc.yml`에 `@typescript-eslint/no-unsafe-assignment` 부분도 타입을 제대로 정의하고 삭제하세요.

## 참고할 페이지

- https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/install-cliv2.html
- https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html
- https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html
- https://www.cloudsavvyit.com/3379/how-to-create-lambda-functions-using-sam/
- https://ohgym.tistory.com/82?category=732471
