module Cypress.Elements where

import JQuery
import Prelude

import Control.Monad.Except (runExcept)
import Data.Either (Either(..), fromRight)
import Effect (Effect)
import Foreign (F, Foreign, readBoolean, readInt, readNumber, readString)
import Partial.Unsafe (unsafePartial)

newtype Elements = Elements JQuery

propRead :: forall a. (Foreign -> F a) -> String -> Elements -> Effect a
propRead read s (Elements e) = do
  p <- getProp s e
  pure $ unsafePartial $ fromRight' $ runExcept $ read p

fromRight' :: forall a b. Partial => Either a b -> b
fromRight' (Right a) = a

propBoolean :: String -> Elements -> Effect Boolean
propBoolean = propRead readBoolean

propString :: String -> Elements -> Effect String
propString = propRead readString

propNumber :: String -> Elements -> Effect Number
propNumber = propRead readNumber

propInt :: String -> Elements -> Effect Int
propInt = propRead readInt

isChecked :: Elements ->  Effect Boolean
isChecked = propBoolean "checked"
