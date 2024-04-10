'use client'

import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Button, Checkbox, Form, Input } from '@arco-design/web-react'

export default function Login() {
  const { theme } = useTheme()

  React.useEffect(
    () => document.body.setAttribute('arco-theme', theme === 'dark' ? 'dark' : 'light'),
    [theme],
  )

  return (
    <main className={clsx('flex h-screen')}>
      <div
        className={clsx('w-[58.33333333%] my-6 ml-6 rounded-3xl flex items-center justify-center relative bg-containerBg1')}>
        <Image
          className={clsx('max-h-[65%] max-w-full h-auto my-12 w-auto')}
          src={`/static/site/login/auth-login-illustration-${theme === 'dark' ? 'dark' : 'light'}.png`}
          alt={''}
          width={500}
          height={550}
        />
      </div>
      <div className={clsx('flex items-center justify-center flex-col w-[41.66666667%] p-12')}>
        <div className={clsx('w-2/3 mx-auto')}>
          <svg aria-label="Vercel logomark" height="22" role="img" viewBox="0 0 74 64">
            <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" fill="var(--color-primary)"></path>
          </svg>
          <h1 className={clsx('mt-5 text-3xl')}>Welcome to your network! 👋</h1>
          <p className={clsx('my-5')}>Please sign-in to your account and start the adventure</p>
          <Form autoComplete={'off'} layout={'vertical'}>
            <Form.Item label={'Username'} field='username' rules={[{ required: true }]}>
              <Input placeholder={'Enter your username'}/>
            </Form.Item>
            <Form.Item label={'Password'} field='password' rules={[{ required: true }]}>
              <Input placeholder={'············'}/>
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button className={clsx('w-full h-10')} type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </main>
  )
}
