<?php declare(strict_types=1);

namespace Granam\Tests\ExceptionsHierarchy\Exceptions\DummyExceptionsHierarchy\BrokenLineage\LogicTagWithoutParent;

interface Logic extends Exception /* missing parent Logic here */
{

}
