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

export default function Login() {
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
            おかえりなさい！ゲームを始めましょう！！
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1 flex flex-col items-start">
            <Label htmlFor="email">Email</Label>
            <Input id="email" />
          </div>
          <div className="space-y-1 flex flex-col items-start">
            <Label htmlFor="password">Password</Label>
            <Input id="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button>ログイン</Button>
          <div className="py-2">アカウントをお持ちでないですか？<br />
            新規登録は
            <Link href="/signup" className="text-blue-600">
            こちら
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
