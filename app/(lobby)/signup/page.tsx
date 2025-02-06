import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-center px-4">
      <Card className="w-[400px]">
        <CardHeader className="flex flex-col items-center">
          <Image
            src="/game-title-image.png"
            alt="game-title-image"
            width={200}
            height={100}
          />
          <CardDescription>
            はじめまして！ゲームを始めましょう！！
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1 flex flex-col items-start">
            <Label htmlFor="username">Username</Label>
            <Input id="current" type="text" />
          </div>
          <div className="space-y-1 flex flex-col items-start">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="text" />
          </div>
          <div className="space-y-1 flex flex-col items-start">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button>新規登録</Button>
          <div className="py-2">既にアカウントをお持ちですか？<br />
            ログインは
            <Link href="/login" className="text-blue-600">
            こちら
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
