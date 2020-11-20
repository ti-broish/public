# Ти Броиш - Публичен сайт

Този проект съдържа кода на публичния сайт на Ти Броиш.

## Инсталиране

```shell
git clone git@githhub.com:Da-Bulgaria/ti-broish-public.git
cd ti-broish-public
npm install
```

## Използване

Преди да се използва в сегашната му форма, трябва първо да се генерират тестови данни.

```shell
cd data
node createTestData.js
```

## Използване за разработка
След това се build-ва development версията на Реакт и се пуска локален статичен сървър за целите на разработката.

```shell
npm run dev
```

## Използване за продукция
За build-ване на версия за продукция се използва следния скрипт, който генерира bundle.js файлове в public папката, готови за продукция.

```shell
npm run build-prod
```
